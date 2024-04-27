export async function handleSendJoinForm(event) {
  event.preventDefault()

  const nameNumber = document.querySelector('input[name="name_number"]').value
  const discord = document.querySelector('input[name="discord"]').value
  const age = document.querySelector('input[name="age"]').value
  const category = document.querySelector('select[name="category"]').value
  const bestResult = document.querySelector('input[name="best_result"]').value
  const goal = document.querySelector('textarea[name="goal"]').value

  if (!validateForm([nameNumber, age, category, bestResult])) {
    document.getElementById('error-message').textContent =
      'Por favor, preencha todos os campos obrigatórios.'
    return
  }
  document.getElementById('error-message').textContent = ''

  const message = `**Nome & Número:** ${nameNumber}\n**Discord:** ${discord}\n**Idade:** ${age}\n**Categoria:** ${category}\n**Melhor Resultado:** ${bestResult}\n**Metas:** ${
    goal || 'Sem metas'
  }`

  const webhookURL =
    'https://discord.com/api/webhooks/1227294789767266436/vrpC85zBU-C90evnHVUsci5kwiLN0QTx8oHOn-so3iGwWWOsvCsT_2tk9T67xS-q1kTx'

  try {
    const formButton = document.getElementById('send-form-button')
    formButton.disabled = true
    formButton.textContent = 'Enviando...'

    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: message }),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    alert('Formulário enviado com sucesso!')
    formButton.textContent = 'Enviado'
    document.getElementById('join-form').reset()
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
    document.getElementById('error-message').textContent =
      'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.'
  }
}

function validateForm(fields) {
  if (fields.some((field) => field === '')) {
    return false
  }
  return true
}
