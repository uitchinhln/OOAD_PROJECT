// const root = '/query'
const syntaxes =
{
    listStudentsInClass: `/list-students`,

    login: `/login`,
    verify: `/`,

    product: {
        search: `/search`,
        detail: `/detail/:id`,
    }
}

module.exports = syntaxes;
