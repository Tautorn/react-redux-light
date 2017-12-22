export const ShoesTypes = {
  SUBMTI: 'SHOES/SUBMTI',
  LIST_SHOES: 'SHOES/LIST_SHOES',
  LOAD_SHOES: 'SHOES/LOAD_SHOES',
  LOADED_SHOES: 'SHOES/LOADED_SHOES',
  UPDATE_FIELD_FORM: 'SHOES/UPDATE_FIELD_FORM'
}

export const ShoesActions = {
  submit: form => ({ type: ShoesTypes.SUBMIT, form }),
  listShoes: data => ({ type: ShoesTypes.LIST_SHOES, data }),
  updateFieldForm: data => ({ type: ShoesTypes.UPDATE_FIELD_FORM, data }),
  loadedShoes: res => ({ type: ShoesTypes.LOADED_SHOES, res }),
  loadShoes: () => ({ type: ShoesTypes.LOAD_SHOES })
}
