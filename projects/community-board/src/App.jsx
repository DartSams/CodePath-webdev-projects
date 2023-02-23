import './App.css'
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <Card imageSrc="../public/centennial.png" name="Centennial Place" address="98 Georgia Ave, Statesboro, GA 30458" dbName="centennial-place-2"/>
      <Card imageSrc="../public/eaglevillage.png" name="Eagle Village" address="410 Georgia Ave, Statesboro, GA 30458" dbName="eaglevillage-2"/>
      <Card imageSrc="../public/freedomslanding.png" name="Freedoms Landing" address="211 Lanier Dr, Statesboro, GA 30458" dbName="freedomslanding-2"/>
      <Card imageSrc="../public/kennedy.png" name="Kennedy Hall" address="191 Knight Dr, Statesboro, GA 30458" dbName="kennedyhall"/>
      <Card imageSrc="../public/southerncourtyard.png" name="Southern Courtyard" address="Statesboro, GA 30458" dbName="southerncourtyard-2"/>
      <Card imageSrc="../public/southernpines.png" name="Southern Pines" address="1818-1824 Chandler Rd, Statesboro, GA 30458" dbName="southernpines-2"/>
      <Card imageSrc="../public/watson.png" name="Watson Hall" address="6083 Forest Dr, Statesboro, GA 30460" dbName="watsonhall"/>
      <Card imageSrc="../public/windward.png" name="Windward Commons" address="11935 Abercorn St, Savannah, GA 31419" dbName="windwardcommons"/>
      <Card imageSrc="../public/compass.png" name="Compass Point" address="11935 Abercorn St, Savannah, GA 31419" dbName="compasspoint"/>
      <Card imageSrc="../public/universitycrossings.png" name="University Crossings" address="Savannah, GA 31419" dbName="universitycrossings"/>
    </div>
  ) //creates a container for cards
}

export default App;
