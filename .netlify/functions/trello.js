const { endsWith } = require('*.jpg')
const actionMoveCardFromListToList = require('./trello/actionMoveCardFromListToList')

exports.handler = async (event, context) => {
  if (event.body) {
    const data = JSON.parse(event.body)
    console.log('data', data)

    if (
      data.action &&
      data.action.display &&
      data.action.display.translationKey
    ) {
      switch(data.action.display.translationKey) {
        case 'action_move_card_from_list_to_list':
          console.log(JSON.stringify(data.action))
          break;

        default:
          console.log('Info: Uncaught Action')
          console.log(JSON.stringify(data))
      }
    }
  } else {
    console.log('no event body')
  }

  return {
    statusCode: 200
  }
}