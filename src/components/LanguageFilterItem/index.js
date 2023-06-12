// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {isActive, languageFilterDetails, setActiveLanguageFilterId} = props
  const {id, language} = languageFilterDetails
  const buttonClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'
  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button
        type="button"
        className={buttonClassName}
        onClick={onClickLanguageFilter}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
