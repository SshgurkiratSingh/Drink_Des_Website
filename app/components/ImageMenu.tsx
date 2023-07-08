interface ImageMenuProps {
  image1: string | undefined;
  image2: string | undefined;
}
const ImageMenu: React.FC<ImageMenuProps> = ({ image1, image2 }) => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={image1} className="w-full rounded-3xl" alt="Image 1" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={image2} className="w-full rounded-3xl" alt="Image 2" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
      </div>
    </div>
  );
};

export default ImageMenu;
