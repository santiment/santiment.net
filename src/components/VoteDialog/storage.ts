import { saveBoolean, getSavedBoolean } from 'san-webkit-next/utils/localStorage'

const KEY = 'HEDGEWEEK_VOTE_DIALOG_CLOSED_2026'

export const saveDialogClosed = () => {
  saveBoolean(KEY, true)
}

export const getSavedDialogClosed = () => getSavedBoolean(KEY) ?? false
