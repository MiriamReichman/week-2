export default function FilterableProductTable(){  
      var array = [
        {category:"sporting good",price:50,stocked:true,name:"Football"},
        {category:"sporting good",price:10,stocked:true,name:"baseball"},
        {category:"sporting good",price:25,stocked:false,name:"baskball"},
        {category:"electronies",price:70,stocked:true,name:"computer"},
        {category:"electronies",price:90,stocked:false,name:"lep top"},
        {category:"electronies",price:250,stocked:true,name:"phone"}
    ]
return(
    <div>
        <SearchBar></SearchBar>
        <ProductTable product={array}></ProductTable>
    </div>
)
}
export function SearchBar(){
    return(
        <div>
          <input className="searchInput" type="text" ></input>
          {/* <br></br> */}
          only show in stack<input className="checkboxInput" type="checkbox"></input>
        </div>
    )
}
export function ProductTable(props){
    const category=['sporting good','electronies']
    var divAraay=[];
    for(var i=0;i<category.length;i++){
     props.product.map((x)=>{
        if(x.category==category[i])
        divAraay.push(<div> Name:{x.name}category: {x.category} price: {x.price} stocked: {x.stocked}</div> );
 }) }
       
return(
    <div>
        <h3>Name</h3>
        <h3>Price</h3>
     

        <ProductCategoryRow></ProductCategoryRow>
        <ProductRow></ProductRow>
    </div>
)
}
export function ProductCategoryRow(props){
return(
    <div></div>
)
}
export function ProductRow(props){
    return(
        <div></div>
    )
}