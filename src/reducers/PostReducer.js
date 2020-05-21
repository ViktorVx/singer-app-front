export const initialState = {
  persons: [
    {
      firstName: "Julia",
      lastName: "Petrova",
      middleName: "Sergeevna",
      birthDate: "24.11.1995",
      gender: "Female",
      passportNumber: "4562г39296",
      email: "julina24-95@mail.ru",
      id: "1"
    },
    {
      firstName: "Oleg",
      lastName: "Ivanov",
      middleName: "Petrovich",
      birthDate: "13.06.1998",
      gender: "Male",
      passportNumber: "65454436778",
      email: "Oleg4325@mail.ru",
      id: "2"
    },
    {
      firstName: "Victor",
      lastName: "Petrov",
      middleName: "Anatolevich",
      birthDate: "31.03.1990",
      gender: "Male",
      passportNumber: "909995643",
      email: "Victor54x@yandex.com",
      id: "3"
    }
  ]
};

const postReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "ADD_PERSON":
      newState.persons = [...state.persons, action.data.person];
      console.log(newState);
      return newState;
    case "DELETE_PERSON":
      newState.persons = state.persons.filter(
        ({ id }) => id !== action.data.id
      );
      console.log(newState);
      return newState;
    default:
      return state;
  }
};
export default postReducer;
