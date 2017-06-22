export const closeModal = () => ({ type: 'CLOSE_MODAL' })
export const openModal = () => ({ type: 'OPEN_MODAL' })

export const setModalType = (modalType) => ({
  type: 'SET_MODAL_TYPE',
  payload: modalType
})
