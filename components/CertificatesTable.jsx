import {
  Box,
  Paper,
  InputBase,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Modal,
} from "@mui/material";
import Layout from "../components/Layout";
import Search from "@mui/icons-material/Search";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const TableHeader = [
  { id: "serialNo", label: "Serial No", minWidth: 100, smWidth: 80 },
  { id: "name", label: "Student Name", minWidth: 200, smWidth: 200 },
  { id: "refNo", label: "Ref No", minWidth: 200, smWidth: 150 },
  { id: "certificate", label: "Certificates", minWidth: 170, smWidth: 120 },
];

const CertificatesTable = ({ certificates, eventName }) => {
  const [isSmallWidth, setISmallWidth] = useState(false);
  useEffect(() => {
    if (window.screen.width <= 750) return setISmallWidth(true);
    else setISmallWidth(false);
  }, []);
  const [preview, setPreview] = useState({
    view: false,
    pdfurl: "",
  });
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const pdfPreview = (data) => {
    setPreview({
      view: true,
      pdfurl: data,
    });
  };
  const closedPdfPreview = () => {
    setPreview({
      view: false,
      pdfurl: "",
    });
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url("/assets/backgrounds/corporate.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <StyledModal
          open={preview.view}
          onClose={closedPdfPreview}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          
            <Box
              sx={{
                width: "90%",
                height: "90%",
                backgroundColor: "#e4e4e4",
                borderRadius: "10px",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <object
                data={preview.pdfurl}
                type="application/pdf"
                width={1000}
                height={500}
                sx={{ width: "100%", height: "100%", borderRadius: "10px" }}
              ></object>
              <Box
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  position: "absolute",
                  top: "-1rem",
                  right: "-1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={closedPdfPreview}
              >
                <CancelRoundedIcon
                  color="red"
                  sx={{ fontSize: "2rem", color: "red", position: "relative" }}
                />
              </Box>
            </Box>
        
        </StyledModal>

        <Layout>
          <SearchContainer>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                mt: "1rem",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search using your name or ref no"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <Search />
              </IconButton>
            </Paper>
            <Box
              sx={{
                minWidth: 200,
                mt: "1rem",
                ml: "1rem",
                p: "10px 0.5rem",
                backgroundColor: "#fff",
                borderRadius: "5px",
                outline: "none",
              }}
              size="small"
            >
              Event - {eventName}
            </Box>
          </SearchContainer>
          <Box sx={{ paddingBottom: "2rem" }}>
            <TableMainPaper>
              <TableContainer sx={{ maxHeight: 500, backgroundColor: "#fff" }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "blue" }}>
                      {TableHeader.map((column) => (
                        <TableCell
                          key={column.id}
                          align="center"
                          style={
                            isSmallWidth
                              ? { minWidth: column.smWidth, padding: ".5rem" }
                              : { minWidth: column.minWidth }
                          }
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {certificates
                      ?.filter(
                        (value) =>
                          value.name
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()) ||
                          value.refNo
                            ?.toString()
                            .includes(searchValue.toLowerCase()?.toString())
                      )
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((item, i) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                            <TableCell
                              align="center"
                              sx={{
                                padding: isSmallWidth ? "0.5rem" : "1rem",
                              }}
                            >
                              {i + 1}
                            </TableCell>
                            <TableCell
                              align="center"
                              sx={{
                                textTransform: "capitalize",
                                padding: isSmallWidth ? "0.5rem" : "1rem",
                              }}
                            >
                              {item.name}
                            </TableCell>
                            <TableCell
                              align="center"
                              sx={{
                                padding: isSmallWidth ? "0.5rem" : "1rem",
                              }}
                            >
                              {item.refNo}
                            </TableCell>
                            <TableCell
                              align="center"
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "gray",
                                padding: isSmallWidth ? "0.5rem" : "1rem",
                              }}
                            >
                              <Link
                                href={item.link}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <GetAppRoundedIcon
                                  sx={{ mr: "10px", cursor: "pointer" }}
                                />
                              </Link>
                              <span>|</span>
                              <VisibilityRoundedIcon
                                sx={{ ml: "10px", cursor: "pointer" }}
                                onClick={() => pdfPreview(item.link)}
                              />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[7, 15, 50, 100]}
                component="div"
                count={certificates.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableMainPaper>
          </Box>
        </Layout>
      </Box>
    </>
  );
};

export default CertificatesTable;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-center;
  width: 600px;
  margin: 2rem auto;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    width: 85%;
    margin: 1rem auto;
  }
`;
const TableMainPaper = styled.div`
  width: 80%;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #fff;
  @media (max-width: 768px) {
    width: 95%;
    height: 100%;
  }
`;
const IconBox = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: -1rem;
  right: -1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const StyledModal = styled(Modal)`
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
