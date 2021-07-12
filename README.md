# Cuddlist
*By Ethan Kaseff - [Visit Cuddlist](http://cuddlist.herokuapp.com/)*

## Cuddlist an Overview
Cuddlist is a full stack application utilizing a Python/Flask backend and an Javascript/React/Redux frontend. It is a clone of www.cuddlist.com with added functionality, such as sending and tracking session reqeusts in app. 

### Frontend Technologies Used:
#### React
Cuddlist is a react application organized into modular components for easy control and management. 

#### Redux
Redux was used to track state across the global application whenever needed. For example the redux store holds the session user giving the application access to user data, images and session requests.

#### Tailwind CSS
Cuddlist uses Tailwind, which is a low level CSS Framework, for styling and design. The design is a mix of personal architecture and open source resources graciously available around the web. 

### Backend Technologies Used
#### Flask
Cuddlist uses Flask with Python as the backend server. 

# In Action
## Splash Page
The home page serves as the main search page as well. The location dropdown autopopulates from the locations in the database so it always stays up to date. The search button also has error handling in case a user forgets to pick a location first.
![image](https://user-images.githubusercontent.com/67133581/125265471-7d656400-e2ca-11eb-98e8-f0fb0df188e7.png)

## Send Request Button
The button to send a request ensures that only someone that is logged in as a client can actually send a request. Users that aren't logged in and Cuddlists, can view Cuddlist profiles, but cannot send a reqeust. 
![image](https://user-images.githubusercontent.com/67133581/125266047-067c9b00-e2cb-11eb-935a-15e9417620b2.png)

```jsx
function SessionRequestFormModal({id}) {
  const [showModal, setShowModal] = useState(false);
  const [cuddlist, setCuddlist] = useState(false)
  const [buttonColor, setButtonColor] = useState('bg-blue-500 hover:bg-blue-600')

  const user = useSelector(state => state.session.user)

  useEffect(() => {
    if (user) {
      if (user.type === 'cuddlists'){
        setCuddlist(true)
        setButtonColor('bg-gray-300')

      }
    } else {
      setCuddlist(true)
      setButtonColor('bg-gray-300')
    }
  }, [user])

  return (
    <>
      <button className={buttonColor + ` rounded-lg shadow-lg text-white font-bold w-full p-1 text-lg m-1`}
      disabled={cuddlist}
      type='button'
      onClick={() => setShowModal(true)}>
        Send Session Request
      </button>
      { cuddlist &&
        <p className='text-sm text-red-600 font-hairline text-center p-2 m-3'>
                Login as a client to send requests
              </p>
      }
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SessionRequestForm id={id}/>
        </Modal>
      )}
    </>
  );
}

export default SessionRequestFormModal;
```

## Session Request Form
The site utilizes modals whenever possible for easy use and navigation. Session request forms were an obvious place to use a modal as it mimiced the third party functionality the other site has, and barely gets the user off of the site before getting placed back to continue navigating. 
![image](https://user-images.githubusercontent.com/67133581/125267408-632c8580-e2cc-11eb-9fb3-c7db1ec47f2a.png)


## Tabbed profile page with in-line editing
The profile page is easy to navigate with a helpful tab to distinguish between personal information and session requests. The editing is intuitive with users able to click anywhere on a field (or specifically the small editing button) to trigger the div to switch over to an input. 
The "Save" Button starts off as gray and disabled and turns blue after some type of change has occured to let the user know they can save now. 
![image](https://user-images.githubusercontent.com/67133581/125266558-8c004b00-e2cb-11eb-84e4-8040fcf8236b.png)

https://user-images.githubusercontent.com/67133581/125269396-45602000-e2ce-11eb-9758-7a790f448f96.mov

```jsx
// Code below is just showing what one path looks like

const ProfileInformation = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user);

  // Boolean values to track what we are editing
  const [editFirstName, setEditFirstName] = useState(false);

  // Field values to keep in local state
  const [firstName, setFirstName] = useState(user.firstName);

  const [buttonColor, setButtonColor] = useState('bg-gray-500')
  useEffect(() => {
    if (firstName !== user.firstName ||
     phoneNumber !== user.phoneNumber) {
     setButtonColor('bg-blue-700 hover:bg-blue-500')
        }
    },[firstName, user.firstName])
  
  // Focus on input when it shows up
  useEffect(() => {
    const input = document.getElementById('input');
    if (input) {
      input.focus();
    }
  })

return (
      <form onSubmit={handleSubmit}>
        <table className='table-fixed'>
          <tbody className='divide-y-2'>
            <tr>
              <td className='w-32'>First Name</td>
              <td className=''>
                <div>
                  {!editFirstName && <span onClick={() => setEditFirstName(true)}>{firstName} <i className="fas fa-edit fa-xs"></i></span>}
                  {editFirstName &&
                    <input
                      id='input'
                      type='text'
                      name='firstNameUpdate'
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      placeholder='First Name'
                      onBlur={() => setEditFirstName(false)}
                    ></input>
                  }
                </div>
              </td>
            </tr>
            
   ......

```





## Responsive Image Upload and Delete with AWS
Images are easy to upload and delete with previews being available immediately upon upload and removed immediately upon deletion. 
![image](https://user-images.githubusercontent.com/67133581/125266737-ba7e2600-e2cb-11eb-8183-535275db9db1.png)


https://user-images.githubusercontent.com/67133581/125268485-5e1c0600-e2cd-11eb-8b50-2cb3196222fb.mov

```jsx
{user.type === 'cuddlists' &&
        <div>
          <h1 className='text-center text-blue-500 mb-5 font-bold text-xl'>Upload a photo for your page</h1>
          <ImageUpload />
          <div className='flex flex-wrap'>
            { user.images &&
              user.images.map( image => {
                return (
                  <div className='w-1/2 p-6 flex justify-center flex-col relative'>
                    <img src={image.imageUrl} alt={'photo' + image.id}></img>
                    <button
                      onClick={() => dispatch(deleteImage(image.id))}
                      >
                      <div className={"absolute right-8 top-8 rounded-full bg-red-500 p-1 text-xs shadow w-6 h-6 "}><i className="fas fa-times text-white"></i></div>

                    </button>

                  </div>
                )
              })
            }
          </div>
          <div>

          </div>
        </div>
      }
```



## Session Request Tracking
Users can easily track session requests in their dashboard. A simple difference like "Client Name" and "Cuddlist Name" help distinguish the page and make it clear which type of user is currently using it. 
![image](https://user-images.githubusercontent.com/67133581/125266903-e8fc0100-e2cb-11eb-823e-81542c7caa75.png)

## Error Handling
Light and effective error handling ensures that users don't get caught on a snag. Each error is clear and clearly placed, and only arrives right when there is an issue. 

![image](https://user-images.githubusercontent.com/67133581/125267097-19439f80-e2cc-11eb-91d8-f589f963d9c8.png)



## Summary and Going Forward 
Cuddlist is a company that I have a personal conneciton with so it was great to delve into this project and get my hands dirty on a different side of that business. I enjoyed conceptualizing and building features that I know would be valuable to both the professionals and their clients. 

In the future I would like to build the application further to include a messaging platform that would be seemlessly personal and easy for the client, and a robust CRM tool with notes and session reminders for the therapists. Beyond just the tracking of communication, the application could also intake financial data about sessions and budgeting, allowing for the site to serve as a larger one stop shop for individuals working in the field. 
