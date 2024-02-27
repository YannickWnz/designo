import { LocationDetails } from '../../Components/LocationDetails/LocationDetails'
import './Locations.scss'

export const Locations = () => {


    return (
        <div className="locations">

            <LocationDetails country='Canada' addressOne='3886 Wellington Street' addressTwo='Toronto Ontario M9C 3J5' phone='+1 234 567 890' mapImg='../assets/locations/desktop/image-map-canada.png'  />

            <LocationDetails country='Australia' addressOne='19 Balonne Street' addressTwo='New South Wales 2443' phone='(02) 6720 9092' reversed={true} mapImg='../assets/locations/desktop/image-map-australia.png'  />

            <LocationDetails country='United Kingdom' addressOne='13 Colorado Way' addressTwo='Rhydy-fro SA8 9GA' phone='078 3115 1400' mapImg='../assets/locations/desktop/image-map-united-kingdom.png'  />

        </div>
    )
}