export default function ProgressBar({seconds}) {
  const handleLoad = () => {
    const progress_bar = document.querySelector('.progress-bar');
        // let percent = 0
        // const interval = setInterval(() => {
        //     percent += 1
        //     progress_bar.style.width = percent + '%'
        //     if (percent > 100) {
        //         clearInterval(interval)
        //     }
        // }, (seconds * 1000)/100);

        //!! CSS only version
        progress_bar.style.transition = `${seconds}s linear width`
        progress_bar.style.width = '100%'
  }

  return (
    <div className="progressBar-container">
      <div className="progress-bar-wrapper">
        <progress className="progress-bar" max="100" value="0"></progress>
      </div>
      <button type="button" className="loadBtn" onClick={handleLoad}>Load</button>
    </div>
  );
}
