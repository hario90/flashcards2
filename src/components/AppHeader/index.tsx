import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import classNames from "classnames";
import styles from "./styles.module.css";

interface Props {
    className?: string;
}

const AppHeader = ({className}: Props) => {
    return (
        <header className={classNames(styles.container, className)}>
            <Button
                className={styles.goBack}
                type="default"
                onClick={() => console.log("back clicked")}
                size="large"
            >
                <LeftOutlined />
                Back to Previous
            </Button>
            <h1>Header</h1>
            <div className={styles.spacer}></div>
        </header>
    );
}

export default AppHeader;