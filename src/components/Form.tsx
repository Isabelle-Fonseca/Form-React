import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validate";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const [erros, setErros] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data: User = {
        name,
        email,
        agree,
    };

    const validateErrors = validate(data);

    if(Object.keys(validateErrors).length > 0){
        alert("Tem erros!");
        return;
    }

    alert("Muito obrigado por se inscrever!")
  };

  return( 
  <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
    <div className="flex flex-col">
        <label className="text-sm text-text-label mb-1" htmlFor="name">Nome:</label>
        <input type="text" placeholder="Digite o seu nome" className="bg-bg-input rounded-md py-3 px-3 text-sm placeholder:text-sm placeholder:text-text-input focus:ring focus:ring-purple" value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
    <div className="flex flex-col">
        <label className="text-sm text-text-label mb-1" htmlFor="name">E-mail:</label>
        <input type="email" placeholder="Digite o seu e-mail" className="bg-bg-input rounded-md py-3 px-3 text-sm placeholder:text-sm placeholder:text-text-input focus:ring focus:ring-purple" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div className="flex flex-col">
        <a href="#" className="text-xs underline mb-2 text-purple">Leia os termos</a>
        <div className="flex gap-2 items-center mb-2">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)}/>
            <label className="text-sm text-text-label" htmlFor="agree">Concordo com os termos</label>
        </div>
        <button type="submit" className="bg-purple hover:bg-purple-light font-medium text-sm py-2 px-4 rounded-md text-white">Cadastrar</button>
    </div>
  </form>
  );
}

export default Form