// Cookie utilities for tracking user progress
export const setCookie = (name, value, days = 30) => {
  const expires = new Date()
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000))
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}

export const getCookie = (name) => {
  const nameEQ = name + "="
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

export const deleteCookie = (name) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
}

// Progress tracking functions
export const saveProgress = (lessonId, progress = {}) => {
  const progressData = {
    lessonId,
    timestamp: new Date().toISOString(),
    progress: {
      completed: progress.completed || false,
      score: progress.score || 0,
      timeSpent: progress.timeSpent || 0,
      lastPosition: progress.lastPosition || 0
    }
  }
  setCookie('user_progress', JSON.stringify(progressData))
}

export const getProgress = () => {
  const progressData = getCookie('user_progress')
  if (progressData) {
    try {
      return JSON.parse(progressData)
    } catch (e) {
      console.error('Error parsing progress data:', e)
      return null
    }
  }
  return null
}

export const clearProgress = () => {
  deleteCookie('user_progress')
}
