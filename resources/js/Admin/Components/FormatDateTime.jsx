import moment from 'moment';
export const FormatDateTime = ({date}) => {
  return (
      <>
          {moment(date).format('LL, hh:mm:ss A')}
      </>
  )
}
