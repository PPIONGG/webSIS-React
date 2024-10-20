import { Card, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import { Link, useLocation } from "react-router-dom";
import styles from "./Table.module.scss";
import { CommonTableProps } from "../types/Common";

export default function CommonTable({
  data,
  mode,
  textHeader,
  disable = false,
}: CommonTableProps) {
  const location = useLocation();

  return (
    <Box className={styles.container}>
      <Card>
        <Box className={styles.header}>{textHeader}</Box>
        <Divider />
        <Box className={styles.header}>
          {disable ? (
            <Box className={styles.linkDisable}>All</Box>
          ) : (
            <Box
              component={Link}
              to={`${location.pathname}/${mode}/All`}
              className={styles.link}
            >
              All
            </Box>
          )}
        </Box>
        <Divider />
        {data.map((item) => (
          <Box key={item.id}>
            <Box className={styles.boxContainer}>
              {disable ? (
                <Box
                >
                  {item.text}
                </Box>
              ) : (
                <Box
                  component={Link}
                  to={`${location.pathname}/${mode}/${item.text}`}
                  className={styles.linkItemBox}
                >
                  {item.text}
                </Box>
              )}
              <Box className={styles.cardBox}
              >
                {item.count}
              </Box>
            </Box>
            <Divider />
          </Box>
        ))}
      </Card>
    </Box>
  );
}
