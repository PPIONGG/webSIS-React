import { Card, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import { Link, useLocation } from "react-router-dom";

interface TableModelProps {
  data: { id: number; text: string; count: number }[];
  mode: string;
  textHeader: string;
  disable?: boolean;
}

export default function TableModel({
  data,
  mode,
  textHeader,
  disable = false,
}: TableModelProps) {
  const location = useLocation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingRight: "10px",
        paddingLeft: "10px",
        paddingTop: "10px",
      }}
    >
      <Card sx={{ paddingTop: "10px" }}>
        <Box
          sx={{
            fontSize: "20px",
            paddingBottom: "15px",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          {textHeader}
        </Box>
        <Divider />
        <Box
          sx={{
            paddingLeft: "15px",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
        >
          {disable ? (
            <Box
              sx={{
                fontSize: "20px",
                textDecoration: "none",
              }}
            >
              All
            </Box>
          ) : (
            <Box
              component={Link}
              to={`${location.pathname}/${mode}/All`}
              sx={{
                fontSize: "20px",
                fontWeight: mode === "model" ? "bold" : "500",
                color: "black",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              All
            </Box>
          )}
        </Box>
        <Divider />
        {data.map((item) => (
          <Box key={item.id}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {disable ? (
                <Box
                  sx={{
                    fontSize: "20px",
                    padding: "15px",
                    color: "black",
                  }}
                >
                  {item.text}
                </Box>
              ) : (
                <Box
                  component={Link}
                  to={`${location.pathname}/${mode}/${item.text}`}
                  sx={{
                    fontSize: "20px",
                    padding: "15px",
                    fontWeight: mode === "model" ? "bold" : "500",
                    color: mode === "model" ? "#216FFF" : "black",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {item.text}
                </Box>
              )}
              <Box
                sx={{
                  backgroundColor: "#D9D9D9",
                  padding: "2px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  borderRadius: "5px",
                }}
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
