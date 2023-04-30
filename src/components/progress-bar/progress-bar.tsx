import { Status } from "../../models/enums"
import { ProgressBarProps } from "./interface-progress-bar"
import { InsideMark, Mark, MarkContainer, MarkSign, MarkTitle, StyledProgressBar } from "./styled-progress-bar"

export const ProgressBar: React.FC<ProgressBarProps> = ({ application }) => {

    const getStatusMarks = () => {
        const status = Object.keys(Status)
        return status
    }

    const getPosition = (pos: number, length: number): string => {
        let left: number = pos > 0 ? ((96 * pos) / length) : pos
        return `${left.toFixed(0)}%`
    }

    if (!application.status) return <></>
    return <StyledProgressBar>
        {getStatusMarks().map((s, idx, arr) =>
            <MarkContainer key={s}>
                {s === application.status.toLowerCase() && <MarkSign left={getPosition(idx, arr.length - 1)}></MarkSign>}
                <Mark left={getPosition(idx, arr.length - 1)} key={s}>
                    {s === application.status.toLowerCase() && <InsideMark></InsideMark>}
                </Mark>
                <MarkTitle left={getPosition(idx, arr.length - 1)}>{s}</MarkTitle>
            </MarkContainer>)}

    </StyledProgressBar >
} 