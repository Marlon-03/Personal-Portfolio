<template>
  <div class="fixed right-4 bottom-4 z-[60] max-sm:right-3 max-sm:bottom-3">
    <button
      type="button"
      class="w-14 h-14 border-0 rounded-full bg-gradient-to-br from-[#1a2b56] to-[#243768] text-white font-bold text-[0.95rem] cursor-pointer shadow-[0_12px_32px_rgba(26,43,86,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(26,43,86,0.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e3b65b] focus-visible:outline-offset-2"
      @click="toggleOpen"
      :aria-expanded="isOpen ? 'true' : 'false'"
      aria-controls="ai-chat-panel"
      aria-label="Open AI chat"
    >
      <span v-if="!isOpen" class="inline-flex items-center justify-center w-full" aria-hidden="true">AI</span>
      <span v-else class="inline-flex items-center justify-center w-full" aria-hidden="true">X</span>
    </button>

    <section
      v-if="isOpen"
      id="ai-chat-panel"
      class="absolute right-0 bottom-[4.25rem] w-[min(24rem,calc(100vw-2rem))] border border-[#e8ddc8] rounded-2xl bg-white shadow-[0_18px_46px_rgba(19,33,60,0.22)] overflow-hidden max-sm:w-[min(24rem,calc(100vw-1.5rem))] max-sm:-right-[0.05rem]"
      aria-label="AI chat panel"
    >
      <header class="px-4 py-[0.9rem] bg-[#fbf7f1] border-b border-[#e8ddc8]">
        <div>
          <h3 class="m-0 text-[0.95rem] text-[#13213c]">Portfolio AI Assistant</h3>
          <p class="mt-1 mb-0 text-[0.78rem] text-gray-600">Ask about Marlon's skills and projects</p>
        </div>
      </header>

      <div
        ref="messagesContainer"
        class="h-[21rem] overflow-y-auto p-[0.9rem] bg-[#fdfbf8] max-sm:h-[18rem]"
        aria-live="polite"
      >
        <article
          v-for="message in messages"
          :key="message.id"
          class="flex mb-[0.7rem]"
          :class="message.role === 'user' ? 'justify-end' : 'justify-start'"
        >
          <p
            class="m-0 max-w-[88%] rounded-2xl px-[0.8rem] py-[0.7rem] text-[0.88rem] leading-[1.45] whitespace-pre-wrap"
            :class="message.role === 'user'
              ? 'bg-[#1a2b56] text-white rounded-br-[0.2rem]'
              : 'bg-white text-[#13213c] border border-[#e8ddc8] rounded-bl-[0.2rem] text-start'"
          >
            {{ message.text }}
          </p>
        </article>

        <div
          v-if="isLoading"
          class="typing-indicator flex items-center gap-[0.35rem] p-[0.8rem] w-fit bg-white border border-[#e8ddc8] rounded-2xl rounded-bl-[0.2rem]"
          aria-label="AI is typing"
        >
          <span class="typing-dot w-[0.38rem] h-[0.38rem] rounded-full bg-[#1a2b56] opacity-35"></span>
          <span class="typing-dot w-[0.38rem] h-[0.38rem] rounded-full bg-[#1a2b56] opacity-35"></span>
          <span class="typing-dot w-[0.38rem] h-[0.38rem] rounded-full bg-[#1a2b56] opacity-35"></span>
        </div>
      </div>

      <form class="p-3 border-t border-[#e8ddc8] bg-white" @submit.prevent="sendMessage">
        <label for="ai-chat-input" class="sr-only">Type your message</label>
        <textarea
          id="ai-chat-input"
          ref="inputRef"
          v-model="input"
          class="w-full resize-none border border-[#d8cdb8] rounded-xl px-[0.7rem] py-[0.65rem] text-[#13213c] text-[0.88rem] [font-family:inherit] disabled:bg-[#f2eee6] disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e3b65b] focus-visible:outline-offset-2"
          rows="2"
          placeholder="Type your question..."
          :disabled="isLoading"
          @keydown="handleEnterToSend"
        ></textarea>

        <div class="mt-[0.55rem] flex items-center justify-between gap-[0.65rem]">
          <p v-if="errorMessage" class="m-0 text-[0.75rem] text-[#a6292f] invisible">{{ errorMessage }}</p>
          <button
            type="submit"
            class="border-0 rounded-[0.65rem] bg-[#1a2b56] text-white text-[0.82rem] font-semibold px-[0.9rem] py-[0.52rem] cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e3b65b] focus-visible:outline-offset-2"
            :disabled="isLoading || !trimmedInput"
          >
            {{ isLoading ? 'Sending...' : 'Send' }}
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup>
import { computed, nextTick, ref, watch } from 'vue'

const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL

const isOpen = ref(false)
const isLoading = ref(false)
const input = ref('')
const errorMessage = ref('')
const messagesContainer = ref(null)
const inputRef = ref(null)
const messageId = ref(1)

// Rate limiting
const MAX_MESSAGES = 5
const RATE_LIMIT_WINDOW = 60_000 // 60 seconds
const MIN_MESSAGE_INTERVAL = 2_000 // 2 seconds

const getRateLimitState = () => {
  try {
    const saved = localStorage.getItem('ai_chat_rate_limit')

    if (!saved) {
      return {
        count: 0,
        windowStart: Date.now(),
        lastMessageTime: 0,
      }
    }

    const state = JSON.parse(saved)

    if (
      typeof state.count !== 'number' ||
      typeof state.windowStart !== 'number' ||
      typeof state.lastMessageTime !== 'number'
    ) {
      throw new Error('Invalid rate limit state')
    }

    return state
  } catch {
    return {
      count: 0,
      windowStart: Date.now(),
      lastMessageTime: 0,
    }
  }
}

const saveRateLimitState = (state) => {
  try {
    localStorage.setItem('ai_chat_rate_limit', JSON.stringify(state))
  } catch {
  }
}

const checkRateLimit = () => {
  const now = Date.now()
  const state = getRateLimitState()

  if (now - state.windowStart >= RATE_LIMIT_WINDOW) {
    state.count = 0
    state.windowStart = now
    state.lastMessageTime = 0
  }

  if (
    state.lastMessageTime > 0 &&
    now - state.lastMessageTime < MIN_MESSAGE_INTERVAL
  ) {
    errorMessage.value =
      'Please wait a couple of seconds before sending another message.'
    return false
  }

  if (state.count >= MAX_MESSAGES) {
    errorMessage.value =
      "You've reached the message limit for now. Please wait a little before trying again."
    return false
  }
  state.count += 1
  state.lastMessageTime = now

  saveRateLimitState(state)

  return true
}

const messages = ref([
  {
    id: messageId.value++,
    role: 'ai',
    text: "Hi! Ask me anything about Marlon's experience, tools, or projects.",
  },
])

const trimmedInput = computed(() => input.value.trim())

const escapeControlCharsInJsonStrings = (rawJson) => {
  let inString = false
  let isEscaped = false
  let result = ''

  for (let index = 0; index < rawJson.length; index += 1) {
    const char = rawJson[index]

    if (isEscaped) {
      result += char
      isEscaped = false
      continue
    }

    if (char === '\\') {
      result += char
      isEscaped = true
      continue
    }

    if (char === '"') {
      inString = !inString
      result += char
      continue
    }

    if (inString) {
      if (char === '\n') {
        result += '\\n'
        continue
      }

      if (char === '\r') {
        result += '\\r'
        continue
      }

      if (char === '\t') {
        result += '\\t'
        continue
      }
    }

    result += char
  }

  return result
}

const parseWebhookResponse = (rawText) => {
  try {
    return JSON.parse(rawText)
  } catch {
    const normalizedJson = escapeControlCharsInJsonStrings(rawText)
    return JSON.parse(normalizedJson)
  }
}

const scrollToBottom = async () => {
  await nextTick()

  if (!messagesContainer.value) return

  messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
}

watch(
  () => [messages.value.length, isLoading.value, isOpen.value],
  async () => {
    if (isOpen.value) {
      await scrollToBottom()
    }
  },
)

const toggleOpen = async () => {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    await nextTick()
    await scrollToBottom()
    inputRef.value?.focus()
  }
}

const handleEnterToSend = (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    sendMessage()
  }
}

const sendMessage = async () => {
  if (isLoading.value || !trimmedInput.value) return

  if (!webhookUrl) {
    errorMessage.value =
      'Webhook URL is missing. Add VITE_MAKE_WEBHOOK_URL to your .env file.'
    return
  }
  if (!checkRateLimit()) return

  const userMessage = trimmedInput.value

  messages.value.push({
    id: messageId.value++,
    role: 'user',
    text: userMessage,
  })

  input.value = ''
  errorMessage.value = ''
  isLoading.value = true

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
      }),
    })

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    const rawText = await response.text()
    const data = parseWebhookResponse(rawText)
    const answer =
      typeof data?.answer === 'string' ? data.answer.trim() : ''

    messages.value.push({
      id: messageId.value++,
      role: 'ai',
      text:
        answer ||
        'I could not find an answer this time. Please try again.',
    })
  } catch (error) {
    messages.value.push({
      id: messageId.value++,
      role: 'ai',
      text:
        'I ran into a connection issue. Please try again in a moment.',
    })

    errorMessage.value =
      error instanceof Error
        ? error.message
        : 'Unable to send message.'
  } finally {
    isLoading.value = false
    await nextTick()
    inputRef.value?.focus()
  }
}
</script>

<style scoped>
.typing-dot {
  animation: ai-chat-bounce 1s infinite ease-in-out;
}

.typing-dot:nth-child(2) {
  animation-delay: 0.15s;
}

.typing-dot:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes ai-chat-bounce {
  0%,
  80%,
  100% {
    opacity: 0.35;
    transform: translateY(0);
  }

  40% {
    opacity: 1;
    transform: translateY(-2px);
  }
}
</style>