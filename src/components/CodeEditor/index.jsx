import { Editor } from "@monaco-editor/react";
import { useDiagram, useSettings } from "../../hooks";
import { Button, Toast, Tooltip } from "@douyinfe/semi-ui";
import { useTranslation } from "react-i18next";
import { setUpDBML } from "./setUpDBML";
import "./styles.css";
import { CopyIcon } from "@phosphor-icons/react";

export default function CodeEditor({
  showCopyButton,
  extraControls,
  ...props
}) {
  const { settings } = useSettings();
  const { database } = useDiagram();
  const { t } = useTranslation();

  const copyCode = () => {
    navigator.clipboard
      .writeText(props.value)
      .then(() => Toast.success(t("copied_to_clipboard")))
      .catch((e) => {
        console.log(e);
      });
  };

  const handleEditorMount = (editor, monaco) => {
    setUpDBML(monaco, database);

    setTimeout(() => {
      editor.getAction("editor.action.formatDocument").run();
    }, 300);
  };

  return (
    <div className="relative h-full">
      <Editor
        {...props}
        theme={settings.mode === "light" ? "vs" : "vs-dark"}
        onMount={handleEditorMount}
      />
      {showCopyButton && (
        <div className="absolute right-6 bottom-2 z-10 space-y-2">
          <div>{extraControls}</div>
          <Tooltip content={t("copy")}>
            <Button
              icon={<CopyIcon size={18} />}
              onClick={copyCode}
              className="inline-block"
            />
          </Tooltip>
        </div>
      )}
    </div>
  );
}
