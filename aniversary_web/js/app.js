const appData = () => ({
  shouldShowMenu: false, 
  initLoadingAnimationStarter(){
    const seconds = 5
    const milliseconds = seconds * 1_000; 
    setTimeout(() => this.shouldShowMenu = true, milliseconds)
  }
})

document.addEventListener('alpine:init', () => {
  Alpine.data('app', appData)
})