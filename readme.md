

---

# 📄 Gerador de Currículos em HTML e PDF

Projeto pessoal desenvolvido para organizar e gerar diferentes versões do meu currículo de forma automatizada, permitindo exportação para PDF utilizando **Node.js** e **Puppeteer**.

---

## 📌 Sobre o projeto

Este repositório contém três versões do meu currículo profissional:

- **Frontend**
- **Backend**
- **Full Stack**

Cada versão foi construída de forma independente, com foco total em otimização para ATS (Applicant Tracking Systems), garantindo melhor leitura por sistemas de recrutamento.

Além disso, cada currículo pode ser automaticamente convertido em PDF através de um script em Node.js utilizando Puppeteer.

---

## 🗂 Estrutura do projeto

A organização atual do repositório segue o seguinte padrão:

```
📦curriculo
 ┣ 📂backend
 ┃ ┣ 📜generate-pdf.js
 ┃ ┣ 📜index.html
 ┃ ┗ 📜style.css
 ┣ 📂frontend
 ┃ ┣ 📜generate-pdf.js
 ┃ ┣ 📜index.html
 ┃ ┗ 📜style.css
 ┣ 📂fullStack
 ┃ ┣ 📜generate-pdf.js
 ┃ ┣ 📜index.html
 ┃ ┗ 📜style.css
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜readme.md
```

Cada pasta representa uma versão específica do currículo, contendo:

- `index.html` → conteúdo do currículo  
- `style.css` → estilização padrão  
- `generate-pdf.js` → script para gerar o PDF  

---

## 🎯 Objetivo

O principal objetivo deste projeto é:

- Manter versões personalizadas do currículo para diferentes tipos de vaga  
- Facilitar a edição e manutenção  
- Gerar PDFs profissionais automaticamente  
- Garantir formatação padronizada  
- Manter compatibilidade com ATS  

---

## 🛠 Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **Node.js**
- **Puppeteer**
- **JavaScript**

---

## 🚀 Como utilizar

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/curriculo.git
```

### 2. Instalar as dependências

Na raiz do projeto execute:
```bash
npm install
```

### 📄 Gerando o PDF

Para gerar o PDF de qualquer versão do currículo:

Acesse a pasta desejada:

Exemplo para o currículo frontend:
```bash
cd frontend
```
Execute o script:
```bash
node generate-pdf.js
```

O arquivo curriculo.pdf será gerado automaticamente na mesma pasta.

### 📌 Personalização

Você pode editar livremente:

Conteúdo do currículo no index.html
Cores e layout no style.css
Configurações de exportação no generate-pdf.js
Isso permite criar facilmente novas versões, como:
- Currículo para estágio
- Currículo para vagas internacionais
- Currículo técnico específico


### 💡 Conceitos aplicados

- Organização modular de projetos
- Automação com Node.js
- Geração de PDFs com Puppeteer
- Estruturação semântica em HTML
- Estilização profissional com CSS
- Otimização para ATS
- Padronização de documentos

### 🔧 Possíveis melhorias futuras

- Criar um script único para gerar todos os PDFs
- Implementar tema claro/escuro
- Criar versão em inglês dos currículos
- Automatizar deploy com GitHub Actions
- Criar interface web para edição dinâmica

### 👨‍💻 Autor

Nome: João Murilo Pereira de Oliveira<br>
LinkedIn: https://linkedin.com/in/joaomurilopoo<br>
GitHub: https://github.com/JoaoMuriloPO<br>
Portfólio: https://portfolio-pessoal-joao-murilo.vercel.app