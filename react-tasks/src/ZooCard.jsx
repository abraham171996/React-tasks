import ReactAudioPlayer from 'react-audio-player';

export const ZooCard = ({animalName,animalImg,animalSound}) => {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:20}}>
        <h1>Animal name is {animalName}</h1>
        <img src={animalImg} style={{width:400,height:400,objectFit:"cover"}} alt="Jaguar" />
        <audio src={animalSound} controls></audio>
    </div>
  )
}
