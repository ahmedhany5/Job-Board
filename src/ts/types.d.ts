type Status = "Todo" | "Done" | "InProgress"
type Category = "Personal" | "Work"
type Priority = "High" | "Medium" | "Low"

type TodoState = Status | Category | Priority

type JType = "Any" | "Full Time" | "Part Time" | "Internship"
type ExperienceLevelType = "Any" | "Junior" | "Mid-Level" | "Senior"


interface TaskType {
    id: string,
    title: string,
    status: Status,
    category: Category,
    priority: Priority,
}

interface JobType {
    id?: string,
    title: string,
    companyName: string,
    location: string,
    applicationUrl: string,
    shortDesc: string,
    fullDesc: string,
    minSalary: string,
    type: JType
    experienceLevel: ExperienceLevelType,
    isFavorite?: string,
    isSplash?: string,
    activeCount?: number,
    isPreviewMode?: boolean
}

interface DaysLimmit {
    limmit: number,
    price: string | number
}


interface CardsStatusType {
    statusId: string | null,
    isFavorite: boolean,
    isSplash: boolean
}

interface JobFormData {
    title: string;
    companyName: string;
    location?: string;
    applicationUrl: string;
    shortDesc?: string;
    fullDesc?: string;
    minSalary?: string;
    type: string;
    experienceLevel: string;
}



interface FilterFormDataType {

    title: string,
    location: string,
    minSalary: string,
    type: string,
    experienceLevel: string


}

interface FilterFormContextType {
    formData: FilterFormDataType
}
