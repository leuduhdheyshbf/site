# Como Configurar Integração com Google Planilhas

## Passo a passo para enviar os dados do formulário para o Google Sheets:

### 1. Crie uma nova Planilha no Google Sheets
- Acesse https://sheets.google.com
- Clique em "+" para criar uma nova planilha
- Nomeie como "Recrutamento LATAM"

### 2. Crie os cabeçalhos das colunas
Na primeira linha, adicione os seguintes cabeçalhos:
- A1: `Data/Hora`
- B1: `Nome`
- C1: `Idade`
- D1: `Nickname`
- E1: `ID da Conta`
- F1: `Cidade/Estado`
- G1: `Função`
- H1: `Patente Atual`
- I1: `Experiência Competitiva`
- J1: `Descrição Experiência`
- K1: `Tempo Disponível`
- L1: `Horário Disponível`

### 3. Abra o Editor de Scripts
- No menu superior, clique em `Extensões` > `Apps Script`

### 4. Cole o código abaixo
```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  var timestamp = new Date();
  
  sheet.appendRow([
    timestamp,
    data.nome || '',
    data.idade || '',
    data.nick || '',
    data.idConta || '',
    data.cidadeEstado || '',
    data.funcao || '',
    data.patenteAtual || '',
    data.experienciaCompetitiva || '',
    data.experienciaDescricao || '',
    data.tempoDisponivel || '',
    data.horarioDisponivel || ''
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({
    result: 'success',
    message: 'Dados salvos com sucesso!'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

### 5. Implante como Web App
- Clique no botão `Implantar` (Deploy) > `Nova implantação`
- Em "Selecionar tipo", escolha `Web app`
- Descrição: "Webhook Recrutamento LATAM"
- Executar como: `Eu` (seu email)
- Quem pode acessar: `Qualquer pessoa` (Anyone)
- Clique em `Implantar`

### 6. Copie a URL do Web App
- Após implantar, você receberá uma URL como:
  `https://script.google.com/macros/s/XXXXX/exec`
- Copie esta URL

### 7. Atualize o código do projeto
- Abra o arquivo `/src/routes/index.tsx`
- Localize a variável `GOOGLE_SHEETS_WEBHOOK_URL`
- Substitua pela URL copiada:
```typescript
const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/SEU_CODIGO_AQUI/exec";
```

### 8. Teste o formulário
- Preencha o formulário e envie
- Verifique se os dados aparecem na sua planilha

## Pronto! 🎉
Agora todas as candidaturas serão salvas automaticamente na sua planilha do Google Sheets.
