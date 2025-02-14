import galleryData from "../utils/galleryData";

function SpecialMoments() {
  return (
    <div className="section">
      <h1>Our Special Moments 💕</h1>
      <div className="grid grid-cols-2 gap-4">
        {galleryData.map((img, index) => (
          <img key={index} src={img} alt="Memory" className="rounded-lg shadow-lg" />
        ))}
      </div>
    </div>
  );
}

export default SpecialMoments;
