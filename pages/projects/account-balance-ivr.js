import { Box, Heading, Main, Table, TableBody, TableCell, TableHeader, TableRow } from 'grommet'
import React from 'react'
import axios from 'axios'

export async function getServerSideProps(context) {
    let data;
    try {
        data = await (await axios.get(process.env.ACCNT_IVR_SRVR + "/rest/accot/balance")).data
        
    } catch(error) {
        if(error.response === undefined) {
            data = {"error": "Oops! Could not connect to the server"}
        }
        else {
            data = error.response.data
        }
    }

    console.log(data)
    return {
        props: { data }
    }
}

export default function Ivr({data}) {
    return (
        <React.Fragment>
            <Main>
                <Box>
                    
                </Box>
                <Box background="light-2" margin="small">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableCell scope="col">Account Number</TableCell>
                                <TableCell scope="col">Password</TableCell>
                                <TableCell scope="col">Balance</TableCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {('error' in data) ? <Heading level={4}>{data.error}</Heading> :
                                data.map(entry => (
                                    <TableRow>
                                        <TableCell>{entry.number}</TableCell>
                                        <TableCell>{entry.nip}</TableCell>
                                        <TableCell>{entry.balance}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </Box>
            </Main>
        </React.Fragment>
    )
}