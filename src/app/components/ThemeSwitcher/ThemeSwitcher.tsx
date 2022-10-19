import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import Text from "../Text/Text";
import './../../style/style.css'
import {IThemed} from "../../models/Models";

interface IProps extends IThemed{
    // nothing here
}

interface IActions {
    /**
     * On Change Theme Action
     */
    onChange: (value: string) => void
}

/**
 * Theme Switcher Component
 */
const ThemeSwitcher = (props: IProps & IActions): JSX.Element => {
    return <div className={`theme-switcher ${props.theme}`}>
        <Text className={`filter-text theme-switcher-text ${props.theme}`} value={'THEME'}/>
            <RadioGroup row={true}
                        onChange={(_, value) => props.onChange(value)}
                        defaultValue={props.theme ?? 'dark-theme'}>
                <FormControlLabel value="light-theme"
                                  control={<Radio color={'primary'} size={'small'} />}
                                  label="Light"/>
                <FormControlLabel value="dark-theme"
                                  control={<Radio color={'primary'} size={'small'} />}
                                  label="Dark"/>
            </RadioGroup>
</div>

}

export default ThemeSwitcher