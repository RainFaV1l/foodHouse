function CatalogItem(props) {

    return (
        <div className="catalog__item catalog-item">
            <div className="gray"></div>
            <div className="catalog__item__img">
                <img src={props.item.src} alt="img"/>
            </div>
            <div className="catalog-item__content">
                <h3 className="catalog__item__name">{props.item.name}</h3>
                <p className="catalog__item__gram">{props.item.gram} грамм - 1 порция</p>
                <p className="catalog__item__gram">{props.item.protein} - белков, {props.item.fat} - жиров, {props.item.carbohydrate} - углеводов</p>
                <a href="#">Добавить в корзину</a>
            </div>
        </div>
    )

}

export default CatalogItem