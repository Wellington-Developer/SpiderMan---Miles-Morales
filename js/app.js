document.addEventListener('DOMContentLoaded', () => {
  var tl = new TimelineMax()

  tl.fromTo('.loading', 1 , {
    width: '100%'},
    {width: '0%', delay: 3, ease: Expo.easeInOut})

    tl.fromTo('.bg-video', 2, 
    {
      width: '0%',
      opacity: 0
    },
    {width: '100%', opacity: 1, delay: 0.3, ease: Expo.easeInOut})
})