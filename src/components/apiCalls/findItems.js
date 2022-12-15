export default function FindItems({
  setItems,
  setLoading,
  role
}) {
  setLoading(true)
  return fetch('http://localhost:4000/graphql', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query:
        `query {
          findItems(role: "${role}"){
            name 
            description
            price 
            discount
          }}`,
     }),
  }, [])
  .then((response) => {
    if (response.ok) {
      const data = response.json()
      return data
    } else {
      console.log("Error occured during fetch request.")
      throw response
    }
  })
  .then((data) => {
    var data1 = data["data"] 
    console.log("items Data", data1)
    var itemsData = data1["findItems"]
    setItems(itemsData)
    setLoading(false)
    return itemsData
  })
}