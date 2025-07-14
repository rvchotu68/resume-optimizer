# jobVerse


## Objective
Build a web app where users can upload resume and a job description(JD), and receive:
- An optimized resume with keywords inserted
- Suggestions to improve the resume
- A match score indicating how well the resume aligns with the JD
***
## Project Structure

### Frontend
* React(Vite)
* Tailwind
* React router dom 
* Redux/Context API
* axios
* react-hook-form 

### Backend
* Nodejs
* Express
* Multer(for file uploads)
* Mongodb(to store the chat history of the users for the interaction  )
* LangChain

### API Contract
#### Type
#### Routes

### Testing Strategy
#### Frontend

#### Backend

***
## Features
- Upload Resume (PDF/Text format)
- Upload / Paste JD
- Submit to Backend
- Displays 
    - Optimized Resume text
    - PDF file to download
    - Matched score
    - Suggestions to improve the Resume by adding more data
    - option to interact with AI to improve the resume.

---

## Work progress

### Phase - 1
#### Decide/Implement:
- [X] Frontend Tech stack
- [X] API contract
- [ ] Testing framework
- [X] Folder structure
- [X] UI (mobile/desktop)
- [X] Routes 
- [X] Authentication using FireStore
- [X] Resume file upload feature
- [X] JD upload/past feature
- [ ] Submit data to backend 
- [ ] Show mocked response

#### Remaining Tasks
- Loader component
- Show loader component when the user details are fetched in the background
- Reauthenticate when the user cookie is expired
- Input sanitization during login, sign up, file upload and JD upload.

### Phase - 2
#### Tasks
- [ ] Create express server
- [ ] create scalable, easy to maintain and efficient backend folder structure.
- [ ] End points for user record creation and user record deletion
- [ ] End points for resume and chat
- [ ] Auth module to verify the JWT token sent from the client
- [ ] Protect all the end points with the Auth module.
- [ ] Create a user DB in mongoDB.
- [ ] Extract the content of files by storing them in memory using multer.

### Phase - 3
#### Tasks
- [ ] Learn LangChain  