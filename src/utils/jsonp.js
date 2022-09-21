const jsonp = (url, data) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    const fnname = 'a' + (+new Date())
    window[fnname] = (res) => {
      resolve(res)
    }
    script.src = url + '?callback=' + fnname
    document.body.appendChild(script)
  })
}

export default jsonp
