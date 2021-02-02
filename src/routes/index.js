import RegisterComponent from "../container/Register";
import LoginComponent from "../container/Login";
import QuizComponent from "../container/Quiz";
import CreateQuizComponent from "../container/CreateQuiz";

const routes = [
    {
        path: "/register",
        component: RegisterComponent,
        title: "Register"
    },
    {
        path: "/login",
        component: LoginComponent,
        title: "Login"
    },
    {
        path: "/",
        component: QuizComponent,
        title: "Quiz"
    },
    {
        path: "/createQuiz",
        component: CreateQuizComponent,
        title: "CreateQuiz"
    }

]
export default routes;