import HomeOffersList from './HomeOffersList/HomeOffersList'
import HeadingImage from './HeadingImage'
import SearchForm from './SearchForm'


export default function HomePage({properties, getHomeOfferList}) {
    return (
        <>
            <HeadingImage/>
            <SearchForm getHomeOfferList={getHomeOfferList}/>
            <HomeOffersList properties={properties} getProperties={getHomeOfferList}/>
        </>
    )
}
