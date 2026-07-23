
function Hero({children, heroClass}) {
  return (
    <div className={`hero-container ${heroClass}`}>
        {/* <Header /> */}
        {/* <XIntro /> */}
        {children}
    </div>
  );
}
export default Hero;