export function debounce(func, delay=100) {
    let timer = null
    return function (...args) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }

  export function dateFormat(date) {
    var dt = new Date(date)
    const y = dt.getFullYear()
    const m = ('0' + (dt.getMonth() + 1)).slice(-2)
    const d = ('0' + dt.getDate()).slice(-2)
  
    const hh = ('0' + dt.getHours()).slice(-2)
    const mm = ('0' + dt.getMinutes()).slice(-2)
    const ss = ('0' + dt.getSeconds()).slice(-2)
  
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  }
  