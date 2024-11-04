
const Card = ({gadget}) => {
    const {product_title} = gadget
    return (
        <div>
            <h2>{product_title}</h2>
        </div>
    );
};

export default Card;