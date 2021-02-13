import RegisterComponent from "../container/Register";
import LoginComponent from "../container/Login";
import QuizComponent from "../container/Quiz";
import CreateQuizComponent from "../container/CreateQuiz";
import EditQuizComponent from "../container/EditQuiz";

const routes = [
    {
        path: "/auth/register",
        component: RegisterComponent,
        title: "Register"
    },
    {
        path: "/auth/login",
        component: LoginComponent,
        title: "Login"
    },
    {
        path: "/",
        component: QuizComponent,
        title: "Quiz"
    },
    {
        path: "/quiz/create",
        component: CreateQuizComponent,
        title: "CreateQuiz"
    },
    {
        path: "/quiz/edit",
        component: EditQuizComponent,
        title: "EditQuiz"
    }

]
export default routes;