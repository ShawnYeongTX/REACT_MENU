import "bootstrap";
import nasiLemakPicture from "./assets/NSLM.jpg"



function MenuItem({name, price, nutritionInfo}) {
  return (
    <>
    <p>
      <strong>{name}</strong> | {price}
      <NutritionalInfo nutritionInfo = {nutritionInfo} />
    </p>
    </>
  );
}

function Category({title, foods}) {
  return (
    <div>
    <h2>{title}</h2>
    {foods}
    </div>
  )
}



function NutritionalInfo({nutritionInfo}) {
  return (
    <div>
      <p>Calories: {nutritionInfo?.calories} kcal</p>
      <p>Protein: {nutritionInfo?.protein} g</p>
      <p>Carbs: {nutritionInfo?.carbs} g</p>
      <p>Fat: {nutritionInfo?.fat} g</p>
    </div>
  )
}



function App() {
  return (
    <>
      <h1>Uncle Shawn Food Menu</h1>
      <hr />
      <img src={nasiLemakPicture} alt="" className="w-100" style={{maxHeight: "300px"}} />
      <Category title = {"Nasi Lemak"} foods = {nasiLemak} />
      <Category title = {"Dessert"} foods=  {dessert} />
      <Category title = {"Beverages"} foods = {drinks} />
    </>
  )
}





const nasiLemak = (
  <>
  <MenuItem 
  name = {"2pcs Fried Chicken"} 
  price = {"RM15.00"} 
  nutritionInfo={{calories: 1000, protein: 31, carbs: 33, fat: 30}} />

  <MenuItem 
  name = {"4pcs Fried Chicken"} 
  price = {"RM20.00"} 
  nutritionInfo={{calories: 1500, protein: 50, carbs: 40, fat: 60}} />
  </>
)

const dessert = (
  <>
  <MenuItem 
  name={"Ice Cream"} 
  price={"RM3.00"} 
  nutritionInfo = {{calories: 207, protein: 3.5, carbs: 24, fat: 11}}/>
  
  <MenuItem 
  name={"Pudding"} 
  price={"RM5.00"} 
  nutritionInfo = {{calories: 120, protein: 3.2, carbs: 20, fat: 3.2}}/>
 
  <MenuItem 
  name={"Red Bean Soup"} 
  price={"RM6.00"} 
  nutritionInfo = {{calories: 10, protein: 10, carbs: 30, fat: 2}}/>
  </>
)

const drinks = (
  <>
  <MenuItem 
  name = {"Coca-Cola"} 
  price = {"RM3.00"} 
  nutritionInfo ={{calories: 240, protein: 0, carbs: 24, fat: 0}}/>
  
  <MenuItem 
  name = {"Ice Lemon Tea"} 
  price = {"RM5.00"} n
  utritionInfo ={{calories: 100, protein: 0, carbs: 25, fat: 0}}/> 
  
  <MenuItem 
  name = {"Americano"} 
  price = {"RM4.50"} 
  nutritionInfo ={{calories: 8.9, protein: 0, carbs: 1.6, fat: 0}}/> 
  </>
)

export default App
