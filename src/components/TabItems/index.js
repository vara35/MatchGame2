import './index.css'

const TabItem = props => {
  const {changeInitialId, tab, isActive} = props

  const initiateChangeId = () => {
    changeInitialId(tab.tabId)
  }
  const isActiveStatus = isActive ? 'addColor' : null

  return (
    <li className="tab-list">
      <button
        type="button"
        className={`${isActiveStatus} tabButton`}
        onClick={initiateChangeId}
      >
        {tab.displayText}
      </button>
    </li>
  )
}

export default TabItem
