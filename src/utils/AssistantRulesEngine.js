export default function runAssistantRules(tasks = []) {
  const messages = []

  const now = new Date()
  const pendingTasks = tasks.filter(t => !t.completed)
  const overdueTasks = pendingTasks.filter(t => new Date(t.dueDate) < now)
  const highPriorityTasks = pendingTasks.filter(t => t.priority === 'High')

  const completedRecently = tasks.filter(t => {
    if (!t.completed || !t.dueDate) return false
    const due = new Date(t.dueDate)
    const daysAgo = (now - due) / (1000 * 60 * 60 * 24)
    return daysAgo <= 3
  })

  // === Rule 1: Too many pending tasks
  if (pendingTasks.length > 10) {
    messages.push({
      type: 'warning',
      text: 'You have more than 10 pending tasks. Focus on your top 3 priorities today.',
    })
  }

  // === Rule 2: Overdue tasks
  if (overdueTasks.length > 0) {
    messages.push({
      type: 'alert',
      text: `⚠️ You have ${overdueTasks.length} overdue task(s). It's time to catch up.`,
    })
  }

  // === Rule 3: Too many high-priority tasks
  if (highPriorityTasks.length > 5) {
    messages.push({
      type: 'tip',
      text: 'You have many tasks marked as High Priority. Consider which are truly urgent.',
    })
  }

  // === Rule 4: No recent completions
  if (completedRecently.length === 0) {
    messages.push({
      type: 'nudge',
      text: 'No tasks completed in the last 3 days. Try finishing one small task today.',
    })
  }

  // === Rule 5: Everything is under control
  if (messages.length === 0) {
    messages.push({
      type: 'success',
      text: 'Awesome job! You’re staying on top of your tasks. 🎉',
    })
  }

  return messages
}
