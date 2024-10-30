
const Form = () => {
  return( 
  <form className="flex flex-col gap-3">
    <div className="flex flex-col">
        <label className="text-sm text-text-label mb-1" htmlFor="name">Nome:</label>
        <input type="text" placeholder="Digite o seu nome" className="bg-bg-input rounded-md py-3 px-3 text-sm placeholder:text-sm placeholder:text-text-input focus:ring focus:ring-purple"/>
    </div>
    <div className="flex flex-col">
        <label className="text-sm text-text-label mb-1" htmlFor="name">E-mail:</label>
        <input type="email" placeholder="Digite o seu e-mail" className="bg-bg-input rounded-md py-3 px-3 text-sm placeholder:text-sm placeholder:text-text-input focus:ring focus:ring-purple" />
    </div>
    <div className="flex flex-col">
        <a href="#" className="text-xs underline mb-2 text-purple">Leia os termos</a>
        <div className="flex gap-2 items-center mb-2">
            <input type="checkbox" />
            <label className="text-sm text-text-label" htmlFor="agree">Concordo com os termos</label>
        </div>
        <button type="submit" className="bg-purple hover:bg-purple-light font-medium text-sm py-2 px-4 rounded-md text-white">Cadastrar</button>
    </div>
  </form>
  );
}

export default Form