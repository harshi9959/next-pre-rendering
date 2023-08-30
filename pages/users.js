function Userlist({ props }) {
    return (
    <>
        <h1>List of users</h1>
        {users.map(user => {
            return (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.address}</p>
                </div>
            )
            )
        }
    }
    
    </>
  }
  
  export default Userlist

  export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log('data',data)
    return {props: {data}}
    
  }