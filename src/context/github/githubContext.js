import { createContext } from "react"; /* import padrão */

/* Context padrão  */
const GithubContext = createContext();

export default GithubContext;

/* 
    Cria um objeto de contexto. 
    Quando o React renderiza um componente que assina 
    esse objeto de Contexto, ele lê o valor atual do contexto
    da correspondência mais próxima Provideracima na árvore.
 */
