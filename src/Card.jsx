import Imagem from './Imagem'
import Text from './Text'


function Cards() {
  return (
    <>
    <h1 className='skills'>4 apredizados na Reprograma</h1>
    <div className='card-container'>
    
    <div className='Card'>
    <h1>Git</h1>
    <Imagem link="https://c.tenor.com/sNi1PFBH9ycAAAAC/horror-sheldon.gif"/>
    <Text texto= 'Git é um sistema de controle de versão de arquivos. Através deles podemos desenvolver projetos na qual diversas pessoas podem contribuir simultaneamente no mesmo, editando e criando novos arquivos e permitindo que os mesmos possam existir sem o risco de suas alterações serem sobrescritas'/>        
    </div>

    <div className='Card'>
    <h1 id='html'>HTML</h1>
    <Imagem link="https://data.whicdn.com/images/244546482/original.gif"/>
    <Text texto= 'O HTML é uma linguagem de marcação, usada para definir a estrutura do seu conteúdo. HTML consiste de uma série de elementos, que você usa para delimitar ou agrupar diferentes partes do conteúdo para que ele apareça ou atue de determinada maneira. As tags anexas podem transformar uma palavra ou imagem num hiperlink, pode colocar palavras em itálico, pode aumentar ou diminuir a fonte e assim por diante.'/>        
    </div>

    <div className='Card'>
    <h1 id='css'>CSS</h1>
    <Imagem link="https://i.gifer.com/GKcl.gif"/>
    <Text texto= 'Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.'/>        
    </div>

    <div className='Card'>
    <h1 id='JavaScript'>JavaScript</h1>
    <Imagem link="https://giffiles.alphacoders.com/369/3692.gif"/>
    <Text texto= 'JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc. — você pode apostar que o JavaScript provavelmente está envolvido.'/>        
    </div>
    </div>
  </>
  )
}

export default Cards