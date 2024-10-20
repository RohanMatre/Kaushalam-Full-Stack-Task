const ProgressBar = ({ progress }) => {

  const getColor = (progress) => {
    if (progress < 25) return 'rgb(255, 178, 178)';  
    if (progress < 50) return 'rgb(255, 204, 153)'; 
    if (progress < 75) return 'rgb(153, 221, 255)';  
    return 'rgb(178, 255, 178)';                     
  };

  const color = getColor(progress);

  return (
    <div className="outer-bar" style={{position: 'relative', height: '30px', background: '#eee', borderRadius: '10px'}}>
      <div
        className="inner-bar"
        style={{
          width: `${progress}%`,
          backgroundColor: color,
          height: '100%',
          borderRadius: '10px',
          transition: 'width 0.4s ease-in-out, background-color 0.4s ease'
        }}
      >
        <span
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#333',  
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
