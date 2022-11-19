const seconds = seconds => seconds * 1_000
const initialData = {
  reasons: [
    'Amo tu sonrisa', 
    'Amo tus abrazos', 
    'Amo tus besos', 
    'Amo tu sonido de patito tomando agua', 
    'Amo cómo te ves dormida', 
    'Amo que me pidas que te abrace', 
    'Amo tu risa', 
    'Amo tu voz tierna', 
    'Amo que llores de felicidad cuando la comida está rica ', 
    'Amo que llores de tristeza cuando la comida no está rica ', 
    'Amo lo comprensiva que eres ', 
    'Amo tus hermosos ojos ', 
    'Amo cómo me mandas notas de voz de besos ', 
    'Amo tu sentido del humor ', 
    'Amo poder confiar en ti ', 
    'Amo lo detallista que eres ', 
    'Amo la pulsera que me regalaste ', 
    'Amo acurrucarme contigo ', 
    'Amo tus regalos ', 
    'Amo que me hagas llorar al contarme películas tristes ', 
    'Amo cuando me cuentas sobre tu trabajo ', 
    'Amo el cómo te esfuerzas en todo lo que haces ', 
    'Amo lo determinada que eres en ser la mejor ', 
    'Amo desvelarme hablando contigo ', 
    'Amo lo mucho que te preocupas por las personas ', 
    'Amo platicar contigo ', 
    'Amo hacer bromas contigo ', 
    'Amo que escuches con atención las cosas que me gustan ', 
    'Amo que me haces mejor persona ', 
    'Amo estar haciendo una vida contigo ', 
    'Amo tu memoria, nunca olvidas nada de lo que te cuento', 
    'Amo que te hagas bolita'
  ].map(reason => reason.trim()),
  actualReason: 0,
  animationClass: 'ining', 
  interval: null, 
  nextReason() {
    let nextReason = this.actualReason + 1
    if (nextReason > this.reasons.length) return
    if(!this.interval) this.selfMovingSlider()
    if (this.actualReason === this.reasons.length - 1) nextReason = 0
    this.animationClass = 'outing'
    setTimeout(() => this.actualReason = nextReason, seconds(1.5))
    setTimeout(() => {
      this.animationClass = 'ining'
    }, seconds(1.5))
  },
  previousReason() {
    const previousReason = this.actualReason - 1
    if (this.actualReason === 0) return
    if (previousReason < 0) return
    if(this.interval) clearInterval(this.interval)
    this.actualReason = previousReason
  },
  selfMovingSlider() {
    this.interval = setInterval(() => {
      this.nextReason()
    }, seconds(3))
  }, 
  cancelSelfMovingSlider() {

  }
}

const appData = () => ({ ...initialData })

document.addEventListener('alpine:init', () => {
  Alpine.data('app', appData)
})